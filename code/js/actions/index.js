export const changeSpread = (bid) => {
    console.log("changeSpread");
    console.log(bid.value);
    return  {
        type: "CHANGE_SPREAD",
        payload: bid
    }
}