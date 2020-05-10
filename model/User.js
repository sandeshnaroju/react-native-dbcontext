import {Model} from '@nozbe/watermelondb'
import {action, field} from '@nozbe/watermelondb/decorators'

class User extends Model {
  static table = 'users'

  @field('email') email
  @field('first_name') firstName
  @field('last_name') lastName
}

export default User
