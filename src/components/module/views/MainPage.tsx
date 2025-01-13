import Header from "./Header.tsx"
import ListView from "./ListView.tsx"
import data from "./Content.tsx";

const MainPage = () => {
const list = data.map(item => {
    return <ListView key={item.id} item={item} />
})
    return (
        <>
        <Header/>
        <div>{list}</div>
        </>
    )
}
export default MainPage
