import { api } from './api'

export type TripDetails = {
  id: string
  destination: string
  starts_at: string
  end_at: string
  is_confirmed: boolean
}

type TripCreate = Omit<TripDetails, 'id' | 'is_confirmed'> & {
  email_to_invite: string[]
}

async function getById(id: string) {
  try {
    const { data } = await api.get<{ trip: TripDetails }>(`/trips/${id}`)

    return data.trip
  } catch (error) {
    throw error
  }
}

async function create({
  destination,
  starts_at,
  end_at,
  email_to_invite,
}: TripCreate) {
  try {
    const { data } = await api.post<{ tripId: string }>('/trips', {
      destination,
      starts_at,
      end_at,
      email_to_invite,
      owner_name: 'Hiago Prates',
      owner_email: 'hiago@gmail.com',
    })

    return data
  } catch (error) {
    throw error
  }
}

export const tripServer = { getById, create }
