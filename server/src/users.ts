export interface User {
  id: number;
  name: string;
  gender: string;
  height: string;
  country: string;
}

const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    gender: 'Male',
    height: '175',
    country: 'USA',
  },
  {
    id: 2,
    name: 'Jane Smith',
    gender: 'Female',
    height: '162',
    country: 'Canada',
  },
  {
    id: 3,
    name: 'Robert Johnson',
    gender: 'Male',
    height: '180',
    country: 'UK',
  },
  {
    id: 4,
    name: 'Emily Davis',
    gender: 'Female',
    height: '160',
    country: 'Australia',
  },
  {
    id: 5,
    name: 'Michael Wilson',
    gender: 'Male',
    height: '170',
    country: 'Germany',
  },
  {
    id: 6,
    name: 'Sarah Johnson',
    gender: 'Female',
    height: '165',
    country: 'USA',
  },
  {
    id: 7,
    name: 'David Lee',
    gender: 'Male',
    height: '178',
    country: 'Canada',
  },
  {
    id: 8,
    name: 'Sophia Kim',
    gender: 'Female',
    height: '163',
    country: 'UK',
  },
  {
    id: 9,
    name: 'Daniel Garcia',
    gender: 'Male',
    height: '175',
    country: 'Australia',
  },
  {
    id: 10,
    name: 'Olivia Brown',
    gender: 'Female',
    height: '168',
    country: 'Germany',
  },
];

export default users;
