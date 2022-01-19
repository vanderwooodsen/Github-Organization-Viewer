import { VscLoading } from 'react-icons/vsc';

export function Loading (){
  return <div className="w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50 flex justify-center items-center">
    <span className="text-gray-800 opacity-90">
      <VscLoading className="animate-spin w-20 h-20"/>
    </span>
  </div>
}
