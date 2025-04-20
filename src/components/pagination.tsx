interface PaginationProps {
    pageNumList: number[],
    currentPage: number,
    setCurrentPage: (pageNum: number) => void
}

function PaginationComponent({
                        pageNumList,
                        currentPage,
                        setCurrentPage
                    }: PaginationProps) {
    return (
        <div className="pokedex-pagination">
            <button className="pagination-button" id="prev-page" disabled>上一页</button>
            <div className="pagination-numbers" id="pagination-numbers">
                {pageNumList.map((pageNum) => {
                    return (
                        <button key={pageNum}
                                className={`pagination-number ${pageNum === currentPage ? 'active' : ''}`}
                                onClick={() => {
                                    setCurrentPage(pageNum)
                                }}
                        >{pageNum}</button>
                    )
                })}
            </div>
            <button className="pagination-button" id="next-page" onClick={() => {
                setCurrentPage(currentPage + 1)
            }}>下一页
            </button>
        </div>
    )
}

export default PaginationComponent;