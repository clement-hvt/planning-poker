import {ReactElement} from "react";

export type UserListProps = {
    children: ReactElement[],
}

export default function UserList({children}: UserListProps) {
    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className={"table-auto min-w-full divide-y-2 divide-gray-200 bg-white text-sm"}>
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Username</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {children}
                </tbody>
            </table>
        </div>
    )
}