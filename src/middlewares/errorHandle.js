import httpStatus from "http-status";

export default function errorHandler(error, req, res, next) {

    if (error.type === "conflict") {
        return res.status(httpStatus.CONFLICT).send(error.message);
    }

    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Error: internal server error!");
}