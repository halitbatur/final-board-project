

function Footer(){

    return(<footer className=" flex justify-items-start footer footer-center p-8 bg-[#262626] text-base-content ">
   <div className="flex text-xs ">
    <span className="font-normal ">made with🔥by:</span>
   <div className="grid grid-flow-col gap-1 font-semibold">
      <a className="link link-hover">Banel,</a> 
      <a className="link link-hover">Danah,</a> 
      <a className="link link-hover">Aland,</a> 
      <a className="link link-hover">Hevar</a>
    </div> 
   </div>
    
    
    <div>
      <p className="font-normal text-xs pl-40 pr-28">Boredify © 2022 - All right reserved</p>
    </div>
    <div className="pl-80" >
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
       
      </div>
  </footer>);
}

export default Footer ; 