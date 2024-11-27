'use client'

import { useMentoringModel } from './mentoring.model'
import { MentoringView } from './mentoring.view'

import { HttpAxiosAdapter } from '@/infra/http/HttpClient'
import { MentoringAgendaService } from '@/services/MentoringAgenda/MentoringAgenda.service'




export default function Home() {
	const httpAxiosAdapter = new HttpAxiosAdapter()
	const mentoringAgendaService = new MentoringAgendaService(httpAxiosAdapter)
	const methods = useMentoringModel(mentoringAgendaService)
	return <MentoringView {...methods} />
}
