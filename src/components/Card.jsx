//const [count,setCount] = useState(0)

useEffect (()=>{
  fetch('https://api.dictionaryapi.dev/api/v2/entries/en/')
  .then((res)=> res.json)
  .then ((data)=>{console.log(data)})
},[count])


//<Button  onClick={()=>{setCount(count+1)}}>click{count}</Button>