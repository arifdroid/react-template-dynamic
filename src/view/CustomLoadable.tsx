import React from 'react';
// import LoadingComponent from 'src/view/shared/LoadingComponent';

export default function CustomLoadable(opts:any) {
  const LazyComponent = React.lazy(opts.loader);

  return (props:any) => (
    <React.Suspense fallback={()=><div>loading</div>}>
      <LazyComponent {...props} />
    </React.Suspense>
  );
}
