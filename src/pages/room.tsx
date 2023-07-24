import {ReactElement} from "react";
import UserList from "../components/userList.tsx";
import Card from "../components/card.tsx";
import users from '../data/users.json'
import {UserListRow, UserListRowProps} from "../components/UserListRow.tsx";

export default function Room() {
    const storyPointValue: Array<number|string> = [0, '1/2', 1, 2, 3, 5, 8, 13, 20, 40, 100, '?']

    const cards: ReactElement[] = storyPointValue.map((number: number|string) => {
        return (
            <Card key={number} storyPoint={number} onClick={() => console.log('5')}/>
        )
    })

    const usersListRows: ReactElement[] = users.map(({username, himself}: UserListRowProps) => {
        return (
            <UserListRow username={username} himself={himself}/>
        )
    })

    return (
        <div className="flex divide-x-2">
            <div className="w-1/3 px-2 pr-3">
                <UserList>
                    {usersListRows}
                </UserList>
            </div>
            <div className="w-2/3 grid gap-3 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 pl-3">
                {cards}
            </div>

        </div>
    )
}