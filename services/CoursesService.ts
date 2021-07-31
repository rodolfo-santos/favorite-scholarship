import { ICourse } from './../models/ICourse';
import courses from '~/api/courses';

export default class CoursesService {
  public getCourses(): ICourse[] {
    return courses;
  }
}
