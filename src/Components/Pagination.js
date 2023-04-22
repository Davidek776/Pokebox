import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

export default function Pagination({ goToNextPage, goToPrevPage }) {
  //   const [page, setPage] = useState(1);

  return (
    <>
      <div className="flex items-center justify-between mx-[10rem] ">
        <div
          onClick={goToPrevPage}
          className="flex items-center cursor-pointer"
        >
          <GrLinkPrevious className="text-[3rem] ml-2"></GrLinkPrevious>
          <p className="text-[1.5rem]">Previous Page</p>
        </div>

        <div
          onClick={goToNextPage}
          className="flex items-center cursor-pointer"
        >
          <p className="text-[1.5rem]">Next Page</p>
          <GrLinkNext className="text-[3rem] ml-2"></GrLinkNext>
        </div>
      </div>
    </>
  );
}
