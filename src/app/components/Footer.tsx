import Link from "next/link"

type Props = {
    topic: string,
    page: string | undefined,
    prevPage: string | null,
    nextPage: string | null,
}

export default function Footer({ topic, page, prevPage, nextPage}: Props) {

    if(!prevPage && !nextPage) return null; // Return nothing if there's no pagination

    const pageNums: number[] = []
    if (prevPage && nextPage) {
        for (let i = parseInt(prevPage) + 1; i < parseInt(nextPage); i++) {
            pageNums.push(i)
        }
    }

    // Link for next page
    const nextPageArea = nextPage ? (
        <Link href={`/results/${topic}/${nextPage}`} 
              className={`flex items-center justify-center px-4 py-2 rounded-md bg-slate-200 hover:bg-slate-300 transition-colors ${!prevPage ? "mx-auto" : ""}`}>
            <span className="font-medium">{!prevPage ? "More" : "Next"}</span>
            <span className="ml-2">›</span>
        </Link>
    ) : null;

    // Link for previous page
    const prevPageArea = prevPage ? (
        <div className="flex items-center gap-2">
            <Link href={`/results/${topic}/${prevPage}`} 
                  className={`flex items-center justify-center px-4 py-2 rounded-md bg-slate-200 hover:bg-slate-300 transition-colors ${!nextPage ? "mx-auto" : ""}`}>
                <span className="mr-2">‹</span>
                <span className="font-medium">{!nextPage ? "Back" : "Prev"}</span>
            </Link>

            {/* Display page numbers between prev and next */}
            <div className="flex gap-2 items-center">
                {pageNums.map(num => (
                    page && num === parseInt(page)
                        ? <span key={num} className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-medium">{num}</span> // Highlight current page
                        : (
                            <Link key={num} href={`/results/${topic}/${num}`} 
                                  className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-slate-200 transition-colors">
                                {num}
                            </Link>
                        )
                ))}
            </div>
        </div>
    ) : null;

    return (
        <footer className="flex flex-row justify-between items-center px-4 py-6 mt-8 border-t border-slate-200 max-w-3xl mx-auto">
            {prevPageArea}
            {nextPageArea}
        </footer>
    )
}
