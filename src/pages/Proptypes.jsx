import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const users = [
    { name: "Олександр Іваненко", age: 25, isAdmin: true },
    { name: "Марія Петренко", age: 30, isAdmin: false },
    { name: "Ігор Сидоренко", age: 22, isAdmin: false },
    { name: "Андрій Коваленко", age: 28, isAdmin: true },
    { name: "Світлана Бойко", age: 35, isAdmin: false },
    { name: "Дмитро Шевченко", age: 40, isAdmin: true },
    { name: "Олена Григоренко", age: 27, isAdmin: false },
    { name: "Максим Лисенко", age: 33, isAdmin: false },
    { name: "Тетяна Кузьменко", age: 29, isAdmin: true },
    { name: "Василь Кравченко", age: 31, isAdmin: false }
];

const Proptypes = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                IT'S PROPTYPES PAGE
            </Typography>
            <Grid container spacing={3}>
                {users.map((user, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{user.name}</Typography>
                                <Typography color="textSecondary">Вік: {user.age}</Typography>
                                <Typography color={user.isAdmin ? "primary" : "textSecondary"}>
                                    {user.isAdmin ? "Адміністратор" : "Користувач"}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Proptypes;
