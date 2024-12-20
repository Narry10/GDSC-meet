interface IEntity {
	id: string
	name: string
	createdAt: Date
	updatedAt: Date
}

export interface IFolder extends IEntity {
	parent_folder_id: string | null
	userId: string
	subjectId: string
}

export interface IFile extends IEntity {
	folder_id: string
	content: string
	type: string
	userId: string
}

const folders: IFolder[] = [
	{
		id: 'a6737c75-7962-4de7-bf74-dc7dc8bc77d7',
		name: 'CMU',
		parent_folder_id: null,
		userId: '1c9b004f-4adc-4d6f-b704-73ba049739c6',
		subjectId: '12e7ee5e-32f3-45da-b121-2a2c5ca9bc36',
		createdAt: new Date('2023-11-11T18:44:14.209Z'),
		updatedAt: new Date('2023-11-11T18:44:14.209Z'),
	},
	{
		id: 'b0bd01b0-e47c-41e8-804e-8fd995e2e03c',
		name: 'CMU123',
		parent_folder_id: null,
		userId: '1c9b004f-4adc-4d6f-b704-73ba049739c6',
		subjectId: '84b7ae26-3c7f-4be7-b8e7-676219636e7b',
		createdAt: new Date('2023-11-14T08:09:19.269Z'),
		updatedAt: new Date('2023-11-14T08:09:19.269Z'),
	},
	// Add more folders as needed
]

const files: IFile[] = [
	{
		id: '540afee3-86b9-4ed2-aa54-8cad6b20bd61',
		name: 'CMU CS 155',
		folder_id: 'a6737c75-7962-4de7-bf74-dc7dc8bc77d7',
		content:
			'C:\\Users\\BOSS\\OneDrive\\Desktop\\Team cap-nckh\\2.Code\\gdscmeet\\server-gdsc-meet\\server\\src\\data\\f75b8281-ac6b-4107-9f74-1b756df2ea43-1700052990471-1) Perl là gì .txt',
		type: '.txt',
		userId: '1c9b004f-4adc-4d6f-b704-73ba049739c6',
		createdAt: new Date('2023-11-15T12:56:30.523Z'),
		updatedAt: new Date('2023-11-15T12:56:30.523Z'),
	},
	{
		id: 'ccadb465-776d-4efe-b1cd-5c2d29d566ec',
		name: 'aaaa',
		folder_id: 'a6737c75-7962-4de7-bf74-dc7dc8bc77d7',
		content:
			'C:\\Users\\BOSS\\OneDrive\\Desktop\\Team cap-nckh\\2.Code\\gdscmeet\\server-gdsc-meet\\server\\src\\data\\636e38a4-2cfb-4142-bbd0-0947b9a8b7b4-1700053227778-1) Perl là gì .txt',
		type: '.txt',
		userId: '1c9b004f-4adc-4d6f-b704-73ba049739c6',
		createdAt: new Date('2023-11-15T13:00:27.795Z'),
		updatedAt: new Date('2023-11-15T13:00:27.795Z'),
	},
	{
		id: '540afee3-86b9-4ed2-aa54-8cad6b20bd61',
		name: 'bbbbbb',
		folder_id: 'a6737c75-7962-4de7-bf74-dc7dc8bc77d7',
		content:
			'C:\\Users\\BOSS\\OneDrive\\Desktop\\Team cap-nckh\\2.Code\\gdscmeet\\server-gdsc-meet\\server\\src\\data\\f75b8281-ac6b-4107-9f74-1b756df2ea43-1700052990471-1) Perl là gì .txt',
		type: '.txt',
		userId: '1c9b004f-4adc-4d6f-b704-73ba049739c6',
		createdAt: new Date('2023-11-15T12:56:30.523Z'),
		updatedAt: new Date('2023-11-15T12:56:30.523Z'),
	},
	{
		id: '540afee3-86b9-4ed2-aa54-8cad6b20bd61',
		name: 'CMU SE 301',
		folder_id: 'a6737c75-7962-4de7-bf74-dc7dc8bc77d7',
		content:
			'C:\\Users\\BOSS\\OneDrive\\Desktop\\Team cap-nckh\\2.Code\\gdscmeet\\server-gdsc-meet\\server\\src\\data\\f75b8281-ac6b-4107-9f74-1b756df2ea43-1700052990471-1) Perl là gì .txt',
		type: '.txt',
		userId: '1c9b004f-4adc-4d6f-b704-73ba049739c6',
		createdAt: new Date('2023-11-15T12:56:30.523Z'),
		updatedAt: new Date('2023-11-15T12:56:30.523Z'),
	},
	// Add more files as needed
]

// Hàm lấy danh sách thư mục theo userId
export const getFoldersByUserId = (userId: string): IFolder[] => {
	return folders.filter((folder) => folder.userId === userId)
}

// Hàm lấy danh sách tệp theo userId
export const getFilesByUserId = (userId: string): IFile[] => {
	return files.filter((file) => file.userId === userId)
}

// Hàm lấy danh sách tệp theo userId
export const getFilesByFouderID = (fouderId: string): IFile[] => {
	return files.filter((file) => file.folder_id == fouderId)
}

// Sử dụng ví dụ:
const userIdToRetrieve = '1c9b004f-4adc-4d6f-b704-73ba049739c6'
