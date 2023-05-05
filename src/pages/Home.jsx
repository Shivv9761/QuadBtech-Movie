import {useState,useEffect} from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Movies';
import Movie from '../components/Movie';
import Movies from '../components/Movies';
const Home = () => {
  const API_URL = "https://api.tvmaze.com/search/shows?q=all";
  const [loading,setLoading]=useState(false);
  const [posts,setPosts]=useState([]);
  async function fetchUserData(){
    setLoading(true);
    try {
      const data=await fetch(API_URL);
      const op=await data.json();
      setPosts(op);

    } catch (error) {
      alert("error in fetching data ") 
      setPosts([])
    }
    setLoading(false);
  }

  console.log(posts[0])

  useEffect(()=>{
    fetchUserData()
  },[]);


  return <div className='flex items-center justify-center min-h-[80vh]'>

     {/* <Movie post={posts[0]}/> */}

  {
    loading?(<Spinner/>):(
      <div>
        { posts.length>0?(
         <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] '>
          {
            posts.map((post)=>{
            return <Movies key={post.id} post={post} />
          })
          }
         </div>
          ):(
            <div className='flex justify-center items-center'>
              No post Found;
            </div>
          )
          
        }
      </div>
    )
  }
  </div>;
};

export default Home;
