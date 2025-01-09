import React, { useState } from 'react';

const yearContent: { [key: number]: string } = {
    2018: "Content for 2018 speakers.",
    2019: "Content for 2019 speakers.",
    2020: "Content for 2020 speakers.",
    2021: "Content for 2021 speakers.",
    2022: "Content for 2022 speakers.",
    2023: "Content for 2023 speakers.",
    2024: "Content for 2024 speakers.",
};

const YearSelector: React.FC<{ onSelectYear: (year: number) => void }> = ({ onSelectYear }) => {
    const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024];

    return (
        <div
            style={{
                display: 'flex',
                overflowX: 'auto',
                padding: '0',
                height: '60px', // Fixed height for the strip
                backgroundColor: '#ffffff',
                alignItems: 'center',
            }}
        >
            {years.map(year => (
                <button
                    key={year}
                    onClick={() => onSelectYear(year)}
                    style={{
                        flex: 1,
                        margin: '0 5px',
                        height: '100%', // Full height of the strip
                        cursor: 'pointer',
                        backgroundColor: 'transparent',
                        color: '#333333',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        border: 'none', // No default border
                        textAlign: 'center',
                        outline: 'none', // Remove default outline
                        transition: 'background-color 0.3s, border 0.3s',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f0f0f0';
                        e.currentTarget.style.border = '1px solid #cccccc';
                        e.currentTarget.style.borderRadius = '0'; // Remove rounded edges
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.border = 'none';
                    }}
                >
                    {year}
                </button>
            ))}
        </div>
    );
};

const Rewind: React.FC = () => {
    const [selectedYear, setSelectedYear] = useState<number>(2018);

    return (
        <div style={{ marginTop: '100px' }}>
            <YearSelector onSelectYear={setSelectedYear} />
        </div>
    );
};

export default Rewind;
