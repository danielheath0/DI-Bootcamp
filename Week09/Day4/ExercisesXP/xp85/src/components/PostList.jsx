import data from '../assets/xp.json'

const PostList = (props) => {
    return ( <>
    <h1>Hi This is a Title</h1>
    {data.map((item)=>{ return(
        <div key={item.id}>
            <h2>{item.title}</h2>
            <h4>{item.content}</h4>
        </div>
    )})} 
    </>);
}
 
export default PostList;