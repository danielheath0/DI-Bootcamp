const UserFavoriteAnimals = (props) => {
        const {favAnimals} = props
    return (  
        <div>
        <h3>
            Fav Animals:
        </h3>
<ul>
    {favAnimals.map((animal, i) =>(
        <li key={i}>{animal}</li>
    )
)}
</ul>

        </div>
    );
}
 
export default UserFavoriteAnimals