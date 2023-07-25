import BooksCard from "../components/BooksCard/BooksCard";
import HeroSection from "../components/HeroSection/HeroSection";
import { useGetBooksQuery } from "../redux/api/apiSlice";

const Home = () => {
    const { data } = useGetBooksQuery(undefined);
    // console.log(books);

    return (
        <div>
            <HeroSection />
            <BooksCard books={data} />
        </div>
    );
};
export default Home;
