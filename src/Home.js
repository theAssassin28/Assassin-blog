import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {    

    
    //const [name, setName] = useState('mario')

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs); 
    // }

    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs');



    

    return (     
        <div className = "home">
            {error && <div>{ error }</div> }
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs = {blogs} title = "All Blogs"></BlogList>}
            {/* <BlogList blogs = {blogs.filter((blog) => blog.author === 'mario')} title = "Mario's Blogs"></BlogList>
            <button onClick = {() => setName('luigi')}>Change Name</button>
            <p>{name}</p> */}
        </div>
    );
     
    /* For useState hooks - Lecture 8
    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(25);
    const handleClick = () => {
        setName('Luigi');  
        setAge(30);      
    }
    return (     
        <div className = "home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old.</p>
            <button onClick = {handleClick}>Click Me!</button>

        </div>
    );*/
}
 
export default Home;