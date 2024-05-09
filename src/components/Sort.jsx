import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sort = () => {
    const [isSortMenuVisible, setIsSortMenuVisible] = useState(false);
    const [isOrderMenuVisible, setIsOrderMenuVisible] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [sortBy, setSortBy] = useState("Date");
    const [order, setOrder] = useState("⬇");

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
                <button>Sort by : {sortBy}</button>
                {isSortMenuVisible && (
                    <div className="Sort__sortBy-dropdown">
                        {sortBy !== "Date" && (
                            <p
                                onClick={() => {
                                    setSearchParams({
                                        sort_by: "created_at",
                                    });
                                    setSortBy("Date");
                                }}
                            >
                                Date
                            </p>
                        )}
                        {sortBy !== "Votes" && (
                            <p
                                onClick={() => {
                                    setSearchParams({
                                        sort_by: "votes",
                                    });
                                    setSortBy("Votes");
                                }}
                            >
                                Votes
                            </p>
                        )}
                        {sortBy !== "Comments" && (
                            <p
                                onClick={() => {
                                    setSearchParams({
                                        sort_by: "comment_count",
                                    });
                                    setSortBy("Comments");
                                }}
                            >
                                Comments
                            </p>
                        )}
                    </div>
                )}
            </div>
            <div
                className="Order"
                onClick={() => {
                    handleMenuToggle("order");
                }}
            >
                <button>Order : {order}</button>
                {isOrderMenuVisible && (
                    <div className="Sort__sortBy-dropdown">
                        {order !== "⬆" && (
                            <p
                                onClick={() => {
                                    setSearchParams({
                                        order: "asc",
                                    });
                                    setOrder("⬆");
                                }}
                            >
                                ⬆ Asc
                            </p>
                        )}
                        {order !== "⬇" && (
                            <p
                                onClick={() => {
                                    setSearchParams({
                                        order: "desc",
                                    });
                                    setOrder("⬇");
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