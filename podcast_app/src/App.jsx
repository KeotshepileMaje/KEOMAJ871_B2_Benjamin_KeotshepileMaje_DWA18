import './App.css'
import Navbar from './components/header/Navbar'
// import data from './data'
import MainContent from './components/MainContent'

export default function App() {

    return (
        <div>
            <Navbar />
            <MainContent />  
        </div>
    )
}

// const defaultArrange = preview
// const arrangeA_Z = [...preview].sort((a, b) => a.title.localeCompare(b.title))
// const arrangeZ_A = [...preview].sort((a, b) => b.title.localeCompare(a.title))
// const ascendingOrder = [...preview].sort((a, b) => new Date(a.updated) - new Date(b.updated))
// const descendingOrder = [...preview].sort((a, b) => new Date(b.updated) - new Date(a.updated))

// function abc() {
// if (activeButton === 'Default' ) {
//     return defaultArrange
// }
// if (activeButton === 'A-Z' ) {
//     return arrangeA_Z
// }
// if (activeButton === 'Z-A' ) {
//     return arrangeZ_A
// }
// if (activeButton === 'Latest date' ) {
//     return ascendingOrder
// }
// if (activeButton === 'Oldest date' ) {
//     return descendingOrder
// }
// }
// console.log(abc)