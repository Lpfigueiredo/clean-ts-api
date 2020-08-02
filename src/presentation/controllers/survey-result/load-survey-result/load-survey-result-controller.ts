import { Controller, HttpResponse, HttpRequest, LoadSurveyResult } from './load-survey-result-controller-protocols'
import { LoadSurveyById } from '../../../../domain/usecases/survey/load-survey-by-id'
import { InvalidParamError } from '../../../errors'
import { forbidden, serverError, ok } from '../../../helpers/http/http-helper'

export class LoadSurveyResultController implements Controller {
  constructor (
    private readonly loadSurveyById: LoadSurveyById,
    private readonly loadSurveyResult: LoadSurveyResult
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { surveyId } = httpRequest.params
      const survey = await this.loadSurveyById.loadById(surveyId)
      if (!survey) {
        return forbidden(new InvalidParamError('surveyId'))
      }
      const surveyResult = await this.loadSurveyResult.load(surveyId)
      return ok(surveyResult)
    } catch (error) {
      return serverError(error)
    }
  }
}
