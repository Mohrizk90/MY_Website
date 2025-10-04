import React, { useEffect, useState } from 'react';

const PerformanceMonitor = ({ enabled = false }) => {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    if (!enabled || process.env.NODE_ENV === 'production') return;

    const measurePerformance = () => {
      // Get navigation timing
      const navigation = performance.getEntriesByType('navigation')[0];
      const paint = performance.getEntriesByType('paint');
      
      const newMetrics = {
        domContentLoaded: navigation ? navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart : 0,
        loadComplete: navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0,
        firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        memory: performance.memory ? {
          used: Math.round(performance.memory.usedJSHeapSize / 1048576),
          total: Math.round(performance.memory.totalJSHeapSize / 1048576),
          limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576)
        } : null
      };

      setMetrics(newMetrics);
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, [enabled]);

  if (!enabled || process.env.NODE_ENV === 'production') return null;

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 9999,
      fontFamily: 'monospace'
    }}>
      <div>DOM Load: {metrics.domContentLoaded?.toFixed(2)}ms</div>
      <div>Page Load: {metrics.loadComplete?.toFixed(2)}ms</div>
      <div>First Paint: {metrics.firstPaint?.toFixed(2)}ms</div>
      <div>FCP: {metrics.firstContentfulPaint?.toFixed(2)}ms</div>
      {metrics.memory && (
        <div>Memory: {metrics.memory.used}MB / {metrics.memory.total}MB</div>
      )}
    </div>
  );
};

export default PerformanceMonitor;
