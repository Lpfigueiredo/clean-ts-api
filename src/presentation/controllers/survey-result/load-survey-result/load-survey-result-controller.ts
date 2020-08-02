import { Controller, HttpResponse, HttpRequest } from './load-survey-result-controller-protocols'
import { LoadSurveyById } from '../../../../domain/usecases/survey/load-survey-by-id'
import { InvalidParamError } from '../../../errors'
import { forbidden } from '../../../helpers/http/http-helper'

export class LoadSurveyResultController implements Controller {
  constructor (
    private readonly loadSurveyById: LoadSurveyById
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const survey = await this.loadSurveyById.loadById(httpRequest.params.surveyId)
    if (!survey) {
      return forbidden(new InvalidParamError('surveyId'))
    }
    return null
  }
}
