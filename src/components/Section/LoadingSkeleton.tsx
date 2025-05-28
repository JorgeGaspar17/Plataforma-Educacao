interface LoadingSkeletonProps {
  height?: string;
  width?: string;
}

export function LoadingSkeleton({ height = "h-64", width = "w-full" }: LoadingSkeletonProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`${width} ${height} bg-gray-100 rounded-lg animate-pulse flex items-center justify-center`}
    >
      <div
        className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        aria-hidden="true"
      ></div>
      <span className="sr-only">Carregando...</span>
    </div>
  );
}



// // components/LoadingSkeleton.tsx
// export function LoadingSkeleton({ height = "h-64" }: { height?: string }) {
//   return (
//     <div className={`w-full ${height} bg-gray-100 rounded-lg animate-pulse`}>
//       <div className="flex items-center justify-center h-full">
//         <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     </div>
//   );
// }