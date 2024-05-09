import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sort = () => {
    const [isSortMenuVisible, setIsSortMenuVisible] = useState(false);
    const [isOrderMenuVisible, setIsOrderMenuVisible] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [sortBy, setSortBy] = useState("created_at");
    const [order, setOrder] = useState("desc");

    useEffect(() => {
        if (searchParams.size === 0) {
            setSortBy("created_at");
            setOrder("desc");
        }
    }, [searchParams]);

    const handleMenuToggle = (menu) => {
        if (menu === "sortBy") {
            setIsSortMenuVisible(!isSortMenuVisible);
        }
        if (menu === "order") {
            setIsOrderMenuVisible(!isOrderMenuVisible);
        }
    };

    return (
        <section className="Sort">
            <div
                className="Sort__sortBy"
                onClick={() => {
                    handleMenuToggle("sortBy");
                }}
            >
                <button>
                    Sort by :{" "}
                    {sortBy === "created_at"
                        ? "Date"
                        : sortBy === "votes"
                        ? "Votes"
                        : "Comments"}
                </button>
                {isSortMenuVisible && (
                    <div className="Sort__sortBy-dropdown">
                        {sortBy !== "created_at" && (
                            <p
                                onClick={() => {
                                    setSearchParams({
                                        sort_by: "created_at",
                                        order: order,
                                    });
                                    setSortBy("created_at");
                                }}
                            >
                                Date
                            </p>
                        )}
                        {sortBy !== "votes" && (
                            <p
                                onClick={() => {
                                    setSearchParams({
                                        sort_by: "votes",
                                        order: order,
                                    });
                                    setSortBy("votes");
                                }}
                            >
                                Votes
                            </p>
                        )}
                        {sortBy !== "comment_count" && (
                            <p
                                onClick={() => {
                                    setSearchParams({
                                        sort_by: "comment_count",
                                        order: order,
                                    });
                                    setSortBy("comment_count");
                                }}
                            >
                                Comments
                            </p>
                        )}
                    </div>
                )}
            </div>
            <div
                className="Sort__order"
                onClick={() => {
                    handleMenuToggle("order");
                }}
            >
                <button>Order : {order === "asc" ? "⬆" : "⬇"}</button>
                {isOrderMenuVisible && (
                    <div className="Sort__order-dropdown">
                        {order !== "asc" && (
                            <p
                                onClick={() => {
                                    setSearchParams({
                                        order: "asc",
                                        sort_by: sortBy,
                                    });
                                    setOrder("asc");
                                }}
                            >
                                ⬆ Asc
                            </p>
                        )}
                        {order !== "desc" && (
                            <p
                                onClick={() => {
                                    setSearchParams({
                                        order: "desc",
                                        sort_by: sortBy,
                                    });
                                    setOrder("desc");
                                }}
                            >
                                ⬇ Desc
                            </p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Sort;
