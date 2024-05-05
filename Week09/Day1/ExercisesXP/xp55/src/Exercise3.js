import "./Exercise.css"

const Exercise = () => {
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
      


  return (
    <>
      <h1 style={style_header}>Header</h1>
      <p className='para'>Paragraph</p>
      <a href="#">link</a>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/025/181/412/small/picture-a-captivating-scene-of-a-tranquil-lake-at-sunset-ai-generative-photo.jpg"alt=""></img>
      <ul>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>
          </>
  );
};

export default Exercise;
