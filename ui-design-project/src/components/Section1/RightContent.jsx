import RightCard from "./RightCard";


const RightContent = (props) => {
  return (
     <div id="right" className=" h-full overflow-x-auto w-2/3 p-6 flex flex-nowrap gap-10 rounded-4xl">
        {props.users.map(function(elem,idx){

     return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
    })}
  </div>
  )
}

export default RightContent;
