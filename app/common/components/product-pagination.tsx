import { useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import { useSearchParams } from "react-router";

type ProductPaginationProps = {
  totalPage: number;
};

export default function ProductPagination({
  totalPage,
}: ProductPaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") ?? 1);

  const onClick = (pg: number) => {
    searchParams.set("page", pg.toString());
    setSearchParams(searchParams);
  };

  const startPage =
    page > totalPage - 2 ? Math.max(1, totalPage - 3) : Math.max(1, page - 1);
  const countPage =
    page > totalPage - 2
      ? Math.min(4, totalPage - startPage + 1)
      : Math.min(3, totalPage - startPage + 1);

  const pageList = [
    ...Array.from({ length: countPage }, (_, i) => startPage + i),
  ];

  return (
    <Pagination>
      <PaginationContent>
        {page > 1 ? (
          <PaginationItem>
            <PaginationPrevious
              to={`?page=${page - 1}`}
              onClick={(event) => {
                event.preventDefault();
                onClick(page - 1);
              }}
            />
          </PaginationItem>
        ) : (
          <PaginationItem>
            <PaginationPrevious
              to={""}
              className="pointer-events-none opacity-50"
            />
          </PaginationItem>
        )}
        {pageList.map((pg) => {
          if (pg === page) {
            return (
              <PaginationItem key={pg}>
                <PaginationLink
                  to={`?page=${pg}`}
                  onClick={(event) => {
                    event.preventDefault();
                    onClick(pg);
                  }}
                  isActive={true}
                >
                  {pg}
                </PaginationLink>
              </PaginationItem>
            );
          }
          return (
            <PaginationItem key={pg}>
              <PaginationLink
                to={`?page=${pg}`}
                onClick={(event) => {
                  event.preventDefault();
                  onClick(pg);
                }}
              >
                {pg}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        {pageList[pageList.length - 1] < totalPage - 1 && (
          <PaginationEllipsis />
        )}
        {pageList[pageList.length - 1] < totalPage && (
          <PaginationItem>
            <PaginationLink
              to={`?page=${totalPage}`}
              onClick={(event) => {
                event.preventDefault();
                onClick(totalPage);
              }}
            >
              {totalPage}
            </PaginationLink>
          </PaginationItem>
        )}
        {page < totalPage ? (
          <PaginationItem>
            <PaginationNext
              to={`?page=${page + 1}`}
              onClick={(event) => {
                event.preventDefault();
                onClick(page + 1);
              }}
            />
          </PaginationItem>
        ) : (
          <PaginationItem>
            <PaginationNext
              to={""}
              className="pointer-events-none opacity-50"
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
