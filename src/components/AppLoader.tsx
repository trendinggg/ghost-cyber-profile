import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const AppLoader = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation skeleton */}
      <div className="h-16 border-b border-border px-4 flex items-center justify-between">
        <Skeleton className="h-8 w-32" />
        <div className="flex space-x-4">
          <Skeleton className="h-8 w-16" />
          <Skeleton className="h-8 w-16" />
          <Skeleton className="h-8 w-16" />
          <Skeleton className="h-8 w-16" />
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <div className="space-y-4">
            <Skeleton className="h-16 w-96 mx-auto" />
            <Skeleton className="h-8 w-80 mx-auto" />
            <Skeleton className="h-6 w-64 mx-auto" />
          </div>
          <Skeleton className="h-20 w-full max-w-2xl mx-auto" />
          <div className="flex justify-center space-x-4">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-36" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLoader;