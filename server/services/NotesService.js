import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class NotesService {
  async find(query = {}) {
    return await dbContext.Notes.find(query).populate("bug");
  }
  async getById(id) {
    let data = await dbContext.Notes.findById(id);
    if (!data) {
      throw new BadRequest("invalid Id");
    }
    return data;
  }
  async create(body) {
    return await dbContext.Notes.create(body);
  }
  async edit(body, userEmail) {
    let data = await dbContext.Notes.findOneAndUpdate(
      { _id: body.id, creatorEmail: userEmail },
      body,
      { new: true }
    );
    if (!data) {
      throw new BadRequest("Invalid Id or you do not own this Note");
    }
    return data;
  }
  async delete(id, email) {
    let data = await dbContext.Notes.findOneAndDelete({
      _id: id,
      creatorEmail: email,
    });
    if (!data) {
      throw new BadRequest("Invalid Id or you do not own this Note");
    }
  }
}

export const notesService = new NotesService();
