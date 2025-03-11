import React from "react";
import PropTypes from "prop-types";

// Функціональний компонент, що приймає властивості (props)
const UserProfile = ({ name, age, isAdmin }) => {
    return (
        <div>
            <h2>Профіль користувача</h2>
            <p><strong>Ім'я:</strong> {name}</p>
            <p><strong>Вік:</strong> {age}</p>
            <p><strong>Статус:</strong> {isAdmin ? "Адміністратор" : "Користувач"}</p>
        </div>
    );
};

// Визначення PropTypes для перевірки типів вхідних даних
UserProfile.propTypes = {
    name: PropTypes.string.isRequired, // name - обов'язковий рядок
    age: PropTypes.number, // age - число (необов'язковий параметр)
    isAdmin: PropTypes.bool, // isAdmin - булевий тип
};

// Значення за замовчуванням для необов'язкових props
UserProfile.defaultProps = {
    age: 18, // Якщо вік не передано, буде 18
    isAdmin: false, // За замовчуванням користувач не адміністратор
};

export default UserProfile;
