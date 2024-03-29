import  Router  from "express";
import {
    create,test, getById, getEvents, updateOne
} from "../controllers/event.js";
import  validateParams  from "../middleware/validate.js";

const router = Router();
router.post("/test", test);

router.post(
    "/",
    validateParams(
        [
        {
            param_key: "scheduled",
            required: true,
            type: "object",
        },
        {
            param_key: "service",
            required: true,
            type: "string",
        },
        {
            param_key: "hotel",
            required: true,
            type: "string",
        },
        {
            param_key: "client",
            required: true,
            type: "string",
        }
        ],
    "body"
    ),
    create
);

router.get(
    "/allEvents/:body",
    validateParams(
      [
        {
          param_key: "body",
          required: true,
          type: "string",
        },
      ],
      "params"
    ),
    getEvents
);

router.get(
    "/:id",
    validateParams(
        [
        {
            param_key: "id",
            required: true,
            type: "string",
        },
        ],
        "params"
    ),
    getById
);

router.put(
    "/:id",
    validateParams(
      [
        {
          param_key: "id",
          required: true,
          type: "string",
        },
      ],
      "params"
    ),
    updateOne
);


export default router;