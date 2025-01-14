import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Sales() {
  return (
    <Card className="flex-1">
        <CardHeader>
            <div className="flex items-center justify-center">
                <CardTitle className="text=lg sm:text-xl text-gray-800">Últimos Clientes</CardTitle>
                <CircleDollarSign className="ml-auto w-4 h-4"/>
            </div>
            <CardDescription>Novos clientes nas últimas 24 horas</CardDescription>
        </CardHeader>

        <CardContent>
            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/29237291?v=4"/>
                    <AvatarFallback>img</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm sm:text-base font-semibold">Demetrius - Web Developer</p>
                    <span className="text-[12px] sm:text-sm text-gray-500">demetrius@email.com</span>
                </div>
            </article>
            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/29237291?v=4"/>
                    <AvatarFallback>img</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm sm:text-base font-semibold">Edivania - Cozinheira</p>
                    <span className="text-[12px] sm:text-sm text-gray-500">edivania@email.com</span>
                </div>
            </article>
            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/29237291?v=4"/>
                    <AvatarFallback>img</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm sm:text-base font-semibold">Monique - Psicóloga</p>
                    <span className="text-[12px] sm:text-sm text-gray-500">monique@email.com</span>
                </div>
            </article>
            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/29237291?v=4"/>
                    <AvatarFallback>img</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm sm:text-base font-semibold">Sidney - Professor</p>
                    <span className="text-[12px] sm:text-sm text-gray-500">sidney@email.com</span>
                </div>
            </article>
        </CardContent>
    </Card>    
  );
}
