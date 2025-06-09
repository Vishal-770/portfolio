import { model, models, Schema } from "mongoose";

export interface IMessage {
  name: string;
  email: string;
  message: string;
}
const MessageSchema = new Schema<IMessage>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
const Message = models.Message || model<IMessage>("Message", MessageSchema);
export default Message;
