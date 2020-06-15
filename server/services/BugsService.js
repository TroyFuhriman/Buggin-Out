import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class BugsService {
  async delete(id) {
    return await dbContext.Bugs.findByIdAndRemove(id);
  }
  async getAll(query) {
    return await dbContext.Bugs.find();
  }
  async getById(id, query) {
    let data = await dbContext.Bugs.findOne({
      _id: id,
    });
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }

  async create(rawData) {
    let data = await dbContext.Bugs.create(rawData);
    return data;
  }
  async edit(id, userEmail, update) {
    let data = await dbContext.Bugs.findByIdAndUpdate(
      { _id: id, creatorEmail: userEmail },
      update,
      { new: true }
    );
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }
}

export const bugsService = new BugsService();
