import {dbContext} from "../db/DbContext";
import {BadRequest} from "../utils/Errors"

class CatsService {

  async find(query = {}){
    return await dbContext.Cats.find(query)
  }
  async getById(id){
    let data = await dbContext.Cats.findById(id);
    if(!data){
      throw new BadRequest("Invalid Id")
    }
    return data
  }
  async create(body) {
    return await dbContext.Cats.create(body)
  }
  async edit(body){
    let update = await dbContext.Cats.findOneAndUpdate({_id: body.id}, body, {new: true})
    if (!update){
      throw new BadRequest("Invalid Id")
    }
    return update
  }
  async delete(id){
    let success = await dbContext.Cats.findByIdAndDelete(id)
    if(!success){
      throw new BadRequest("Invalid Id")
    }
  }
}

export const catsService = new CatsService