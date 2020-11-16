import { IJsonApiMeta } from './IJsonApiMeta';
import { IJsonApiLinks } from './IJsonApiLink';

export interface IJsonApiError {
  id?: any; //a unique identifier for this particular occurrence of the problem.
  links?: IJsonApiLinks; //a links object containing the following members:
  //about: a link that leads to further details about this particular occurrence of the problem.
  status?: string; //the HTTP status code applicable to this problem, expressed as a string value.
  code?: string; //an application-specific error code, expressed as a string value.
  title?: string; //a short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
  detail?: string; //a human-readable explanation specific to this occurrence of the problem. Like title, this field’s value can be localized.
  source?: any; //an object containing references to the source of the error, optionally including any of the following members:
  // pointer: a JSON Pointer [RFC6901] to the associated entity in the request document [e.g. "/data" for a primary data object, or "/data/attributes/title" for a specific attribute].
  // parameter: a string indicating which URI query parameter caused the error.
  meta?: IJsonApiMeta;
}
