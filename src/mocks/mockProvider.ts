import { IUser } from '../interfaces'

export const mockProvider = {
  users: [],
  setUsers: jest.fn(),
  handleGetUsers: jest.fn(),
  isLoading: false,
  setIsLoading: jest.fn(),
  modalIsOpen: false,
  setModal: jest.fn(),
  toggleModal: jest.fn(),
  isEditing: false,
  setIsEditing: jest.fn(),
  toggleEditModal: jest.fn(),
  userEdit: {} as IUser,
  setUserEdit: jest.fn(),
}
