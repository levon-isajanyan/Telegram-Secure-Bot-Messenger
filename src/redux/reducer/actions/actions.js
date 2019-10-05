import { sendFileToTelegramGroup } from "../../constants/action-types";

function sendFile(payload) {
    return { type: sendFileToTelegramGroup, payload };
}

export default sendFile(payload)