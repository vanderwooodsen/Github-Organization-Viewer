export function LoadingError (){
  return <div className="w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50 flex justify-center items-center">
    <span className="text-red-500 opacity-90">
      There was an error loading data
    </span>
  </div>
}
