import Titles from "../Titles/Titles";

const FeaturedCategories = () => {
    return (
        <section className=" body-font">
            <div className="container px-5 py-24 mx-auto">
                <Titles
                    title="Featured Categories"
                    subTitle="Find all of your favorite book categories here"
                />
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="100"
                                height="100"
                                viewBox="0 0 48 48"
                                className="text-indigo-500  mb-3 inline-block"
                            >
                                <path
                                    fill="#b0bec5"
                                    d="M40,31.034C40,23.302,32.837,18,24,18S8,23.302,8,31.034S15.163,46,24,46S40,38.766,40,31.034z"
                                ></path>
                                <path
                                    fill="#78909c"
                                    d="M39.812 33.159c-.207 1.274-.612 2.52-1.186 3.698L24 32.483 39.812 33.159zM24 32.483l-5.28 12.629c-1.449-.502-2.814-1.207-4.038-2.066L24 32.483zM33.318 43.046c-1.224.859-2.588 1.564-4.038 2.066L24 32.483 33.318 43.046zM24 32.483L9.374 36.857c-.574-1.178-.979-2.423-1.186-3.698L24 32.483z"
                                ></path>
                                <path
                                    fill="#e65100"
                                    d="M43.603,21.188c1.94-0.669,2.397-4.46,2.397-4.46c-2.9,1.418-4.831,0-5.792-2.676 c-3.221-8.92-13.422-8.028-13.422-8.028h-1.83h-3.992c0,0-9.133-0.892-12.646,8.028C7.27,16.728,5.164,18.147,2,16.728 c0,0,0.499,3.791,2.615,4.46c-0.998,0.553-1.737,0-2.366-0.339C2.25,26.54,7.21,31,12.54,31h12.417h11.382 c4.886,0,9.433-4.46,9.433-10.151C45.195,21.188,44.518,21.741,43.603,21.188z"
                                ></path>
                                <path
                                    fill="#ef6c00"
                                    d="M21.007,12.077c0,0-6.085-5.538,3.043-11.077c0,0-0.677,1.236,0.68,2.885 c0.309-0.57,1.25-1.038,1.25-1.038s0.347,2.247,1.113,2.769c4.057,2.769,0.31,6.144,0.31,6.144S25.98,13,23.98,13 S21.007,12.077,21.007,12.077z"
                                ></path>
                                <path
                                    fill="#e0e0e0"
                                    d="M12,17.111C12,13.656,14.289,10,18,10c2.571,0,4.474,1.778,6,1.778S27.429,10,30,10 c3.711,0,6,3.656,6,7.111c0,4.571-0.857,6.222-1.92,8.456c-0.851,1.79,0,3.459,0,5.189s-1.4,3.497-1.92,4.324 C30.72,37.37,30.24,42,25.44,42c0,0-2.16,0-2.88,0c-4.8,0-5.28-4.739-6.72-6.919c-0.54-0.817-1.92-2.595-1.92-4.324 c0-1.714,0.851-3.399,0-5.189C12.857,23.333,12,21.683,12,17.111z"
                                ></path>
                                <path
                                    fill="#d32f2f"
                                    d="M20.238,35.712C21.375,37.125,21,40,23.998,40c3.002,0,2.627-2.875,3.76-4.288 C24,37,24,37,20.238,35.712z"
                                ></path>
                                <path
                                    fill="#bf360c"
                                    d="M30.302,30.917C30,30.38,29.657,29.771,29.35,28.844c-0.043-0.131-0.08-0.304-0.115-0.511 l-0.986,0.166c0.044,0.266,0.096,0.489,0.152,0.658c0.337,1.021,0.721,1.702,1.03,2.25c0.343,0.609,0.57,1.012,0.57,1.567 c0,0.72-0.508,1.15-1,1.15c-0.591,0-1.231,0.096-1.78,0.635c-0.409,0.402-0.873,0.739-1.421,0.908C25.212,35.85,24.58,36,24,36 s-1.212-0.15-1.799-0.331c-0.548-0.169-1.012-0.506-1.421-0.908c-0.548-0.539-1.189-0.635-1.78-0.635c-0.485,0-1-0.395-1-1.125 c0-0.521,0.221-0.904,0.556-1.486c0.33-0.574,0.741-1.288,1.05-2.377c0.047-0.167,0.092-0.389,0.132-0.653l-0.988-0.15 c-0.033,0.214-0.067,0.395-0.106,0.53c-0.275,0.971-0.636,1.598-0.955,2.151C17.319,31.657,17,32.213,17,33 c0,1.33,1.017,2.125,2,2.125c0.875,0,1.175,0.541,1.238,0.587C22,37,23.002,37.25,24,37.25c1.002,0,2-0.25,3.758-1.538 c0.061-0.044,0.367-0.587,1.242-0.587c0.983,0,2-0.805,2-2.15C31,32.157,30.676,31.582,30.302,30.917z"
                                ></path>
                                <path
                                    fill="#bf360c"
                                    d="M26.812 31c0 0 .188.536.188.857 0 .75-.502 1.286-1.125 1.286-.188 0-.36-.06-.51-.146C25.125 33.589 24.607 34 24 34s-1.125-.411-1.365-1.003c-.15.086-.322.146-.51.146-.623 0-1.125-.536-1.125-1.286C21 31.536 21.188 31 21.188 31s.375.857 1.312.643c.469-.107 1.031.214 1.5.214s1.031-.321 1.5-.214C26.438 31.857 26.812 31 26.812 31zM19 27l.25-3.5c.076-1.165.122-2.329.184-3.5.104 1.162.226 2.331.316 3.5L20 27H19zM28 27l.25-3.5c.076-1.165.122-2.329.184-3.5.104 1.162.226 2.331.316 3.5L29 27H28z"
                                ></path>
                                <g>
                                    <path
                                        fill="#212121"
                                        d="M31.99 26.13C30.34 31.2 26 28.01 26 28.01c.44-.21.9-.55 1.32-.93 1.05-.93 1.91-2.08 1.91-2.08.67 0 1.18.05 1.57.13C32.17 25.43 31.99 26.13 31.99 26.13zM16.233 26.13c1.833 5.07 6.656 1.88 6.656 1.88-.489-.21-1-.55-1.467-.93C20.256 26.15 19.3 25 19.3 25c-.744 0-1.311.05-1.744.13C16.033 25.43 16.233 26.13 16.233 26.13z"
                                    ></path>
                                </g>
                                <g>
                                    <path
                                        fill="#fafafa"
                                        d="M30.13 27.57c-1.77 1.16-2.75-.32-2.75-.32s.3-.3.65-.64c.39-.37.86-.78 1.09-.86.17-.06.38-.08.6-.06.34.01.68.11.85.25C31.12 26.38 30.62 27.25 30.13 27.57zM18.3 27.57c1.967 1.16 3.056-.32 3.056-.32s-.333-.3-.722-.64c-.433-.37-.956-.78-1.211-.86-.189-.06-.422-.08-.667-.06C18.378 25.7 18 25.8 17.811 25.94 17.2 26.38 17.756 27.25 18.3 27.57z"
                                    ></path>
                                </g>
                                <g>
                                    <path
                                        fill="#827717"
                                        d="M30 26.38c0 .55-.45 1-1 1-.47 0-.87-.33-.97-.77.39-.37.86-.78 1.09-.86.17-.06.38-.08.6-.06C29.89 25.87 30 26.11 30 26.38zM18.444 26.38c0 .55.5 1 1.111 1 .522 0 .967-.33 1.078-.77-.433-.37-.956-.78-1.211-.86-.189-.06-.422-.08-.667-.06C18.567 25.87 18.444 26.11 18.444 26.38z"
                                    ></path>
                                </g>
                                <g>
                                    <path
                                        fill="#212121"
                                        d="M25.004 25.507c.098.548.19 1.102.378 1.579.18.496.524.633.876.492.381-.156.799-.495 1.168-.858.381-.362.751-.749 1.112-1.155l1.141-1.198c.422-.394.696-.749 1.191-1.197.517-.431 1.244-.563 1.845-.373.608.189 1.045.65 1.286 1.151-.418-.371-.895-.648-1.384-.67-.48-.041-.928.155-1.224.471-.268.345-.671.864-1.018 1.26l-1.101 1.232c-.386.403-.779.813-1.221 1.185-.455.353-.912.744-1.597.903-.331.087-.792.024-1.076-.229-.134-.111-.259-.257-.336-.428-.077-.161-.107-.312-.135-.462C24.834 26.617 24.884 26.058 25.004 25.507zM23.5 26.5c.181.221.333.467.396.785.029.156.039.362-.106.572-.124.155-.242.249-.404.346-.324.181-.716.183-1.031.115-.321-.069-.608-.187-.862-.334-1.026-.574-1.818-1.37-2.585-2.125-.381-.386-.769-.757-1.14-1.161l-.553-.616c-.19-.23-.292-.352-.492-.487C15.98 23.069 14.824 23.21 14 23.949c.268-.479.711-.893 1.277-1.102.562-.204 1.236-.19 1.812.098.279.124.575.38.745.553l.579.548c.402.355.792.736 1.186 1.107.784.748 1.516 1.524 2.341 2.089C22.73 27.828 23.746 27.891 23.5 26.5z"
                                    ></path>
                                </g>
                            </svg>
                            <p className="leading-relaxed text-white font-bold">
                                Horror
                            </p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <img
                                className="text-indigo-500 mb-3 inline-block"
                                width="100"
                                height="100"
                                src="https://img.icons8.com/bubbles/100/novel.png"
                                alt="novel"
                            />
                            <p className="leading-relaxed text-white font-bold">
                                Romance
                            </p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <img
                                className="text-indigo-500 mb-3 inline-block"
                                width="100"
                                height="100"
                                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/external-drama-literature-flaticons-lineal-color-flat-icons-2.png"
                                alt="external-drama-literature-flaticons-lineal-color-flat-icons-2"
                            />
                            <p className="leading-relaxed text-white font-bold">
                                Drama
                            </p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="100"
                                height="100"
                                viewBox="0 0 100 100"
                                className="text-indigo-500 mb-3 inline-block"
                            >
                                <circle
                                    cx="78"
                                    cy="14"
                                    r="1"
                                    fill="#f1bc19"
                                ></circle>
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="38"
                                    fill="#f9dbd2"
                                ></circle>
                                <circle
                                    cx="84"
                                    cy="16"
                                    r="4"
                                    fill="#f1bc19"
                                ></circle>
                                <circle
                                    cx="14"
                                    cy="26"
                                    r="2"
                                    fill="#ee3e54"
                                ></circle>
                                <circle
                                    cx="78"
                                    cy="77"
                                    r="2"
                                    fill="#fbcd59"
                                ></circle>
                                <circle
                                    cx="17"
                                    cy="78"
                                    r="4"
                                    fill="#fbcd59"
                                ></circle>
                                <circle
                                    cx="24"
                                    cy="83"
                                    r="2"
                                    fill="#ee3e54"
                                ></circle>
                                <circle
                                    cx="24.483"
                                    cy="70.517"
                                    r="2.483"
                                    fill="#fff"
                                ></circle>
                                <circle
                                    cx="16"
                                    cy="48"
                                    r="1"
                                    fill="#fff"
                                ></circle>
                                <circle
                                    cx="86"
                                    cy="31"
                                    r="1"
                                    fill="#f1bc19"
                                ></circle>
                                <circle
                                    cx="83"
                                    cy="53.125"
                                    r="2"
                                    fill="#fff"
                                ></circle>
                                <g>
                                    <path
                                        fill="#836f61"
                                        d="M50,20c-12,0-22,18-20,30c1.544,5.614,8,11,8,16c0,4-2.945,6.001-6,10c6,3,12,4,18,4s12-1,18-4 c-3.055-3.999-6-6-6-10c0-5,6.456-10.386,8-16C72,38,62,20,50,20z"
                                    ></path>
                                    <path
                                        fill="#472b29"
                                        d="M32,76.5c-0.106,0-0.212-0.033-0.303-0.103c-0.219-0.167-0.261-0.481-0.094-0.701 c0.797-1.043,1.601-1.969,2.311-2.786C35.996,70.514,37.5,68.782,37.5,66c0-2.596-1.885-5.363-3.881-8.292 c-1.664-2.443-3.384-4.969-4.101-7.575c-0.45-2.681-0.333-5.728,0.327-8.861c0.057-0.27,0.322-0.444,0.592-0.386 c0.27,0.057,0.443,0.322,0.386,0.592c-0.634,3.012-0.749,5.931-0.331,8.44c0.662,2.396,2.334,4.852,3.953,7.227 C36.531,60.205,38.5,63.096,38.5,66c0,3.156-1.691,5.103-3.832,7.567c-0.734,0.845-1.494,1.719-2.271,2.737 C32.299,76.432,32.15,76.5,32,76.5z"
                                    ></path>
                                    <path
                                        fill="#472b29"
                                        d="M30.97,39.375c-0.047,0-0.095-0.007-0.143-0.021c-0.265-0.079-0.416-0.357-0.336-0.622 c1.107-3.721,2.872-7.31,5.104-10.379c0.162-0.224,0.474-0.273,0.698-0.11c0.224,0.162,0.273,0.475,0.11,0.698 c-2.166,2.979-3.879,6.463-4.955,10.077C31.385,39.235,31.186,39.375,30.97,39.375z"
                                    ></path>
                                    <path
                                        fill="#472b29"
                                        d="M67.661,55.375c-0.091,0-0.184-0.025-0.266-0.077c-0.234-0.147-0.304-0.456-0.156-0.689 c1.196-1.897,1.899-3.359,2.279-4.741c1.147-6.899-1.828-16.219-7.247-22.615C58.583,22.898,54.225,20.5,50,20.5 c-4.118,0-8.385,2.292-12.015,6.453c-0.182,0.208-0.498,0.23-0.706,0.048c-0.208-0.181-0.229-0.497-0.048-0.705 C41.054,21.914,45.589,19.5,50,19.5c4.523,0,9.153,2.524,13.035,7.106c5.595,6.604,8.662,16.258,7.458,23.476 c-0.418,1.531-1.158,3.076-2.409,5.059C67.989,55.292,67.827,55.375,67.661,55.375z"
                                    ></path>
                                    <path
                                        fill="#472b29"
                                        d="M68,76.5c-0.15,0-0.299-0.068-0.398-0.197c-0.777-1.018-1.537-1.892-2.271-2.737 C63.191,71.103,61.5,69.156,61.5,66c0-2.897,2.037-5.89,3.833-8.531c0.156-0.228,0.467-0.288,0.695-0.132 c0.229,0.155,0.288,0.466,0.132,0.695c-1.716,2.521-3.66,5.38-3.66,7.969c0,2.782,1.504,4.514,3.586,6.911 c0.71,0.817,1.514,1.743,2.311,2.786c0.167,0.219,0.125,0.533-0.094,0.701C68.213,76.467,68.106,76.5,68,76.5z"
                                    ></path>
                                    <path
                                        fill="#472b29"
                                        d="M66,41c0,11.598-7.163,27-16,27S34,52.598,34,41s7.163-15,16-15S66,29.402,66,41z"
                                    ></path>
                                    <path
                                        fill="#edf7f5"
                                        d="M50,74.3c-4.781,0-6.507-8.376-8.896-19.969c-0.347-1.683-1.303-2.683-2.315-3.742l-0.397-0.419 c-2.474-1.992-3.691-4.759-3.691-8.291C34.7,33.246,41.76,22.7,50,22.7s15.3,10.546,15.3,19.179c0,3.775-1.389,6.671-4.128,8.606 l-0.054,0.038l-0.045,0.047c-1.149,1.188-1.8,2.094-2.171,3.749l-0.405,1.815C56.235,66.283,54.45,74.3,50,74.3z"
                                    ></path>
                                    <path
                                        fill="#472b29"
                                        d="M50,23.4c7.863,0,14.6,10.161,14.6,18.479c0,3.535-1.29,6.238-3.833,8.035l-0.107,0.076 l-0.091,0.095c-1.212,1.253-1.946,2.275-2.351,4.082l-0.405,1.815C55.707,65.435,53.889,73.6,50,73.6 c-4.015,0-5.656-7.014-8.21-19.411c-0.387-1.88-1.459-3-2.494-4.084c-0.129-0.135-0.26-0.272-0.393-0.414l-0.068-0.073 l-0.078-0.062c-2.227-1.786-3.357-4.369-3.357-7.678C35.4,33.561,42.137,23.4,50,23.4 M50,22c-8.837,0-16,11.042-16,19.879 c0,3.987,1.468,6.835,3.881,8.77c1.15,1.227,2.191,2.138,2.538,3.823C43,67,44.708,75,50,75s7-9,9.584-20.528 c0.334-1.49,0.902-2.289,1.991-3.415c2.735-1.933,4.425-4.9,4.425-9.178C66,33.042,58.837,22,50,22L50,22z"
                                    ></path>
                                    <path
                                        fill="#472b29"
                                        d="M54,55.5c0,5.799-1.791,14.5-4,14.5s-4-8.701-4-14.5s1.791-6.5,4-6.5S54,49.701,54,55.5z"
                                    ></path>
                                    <path
                                        fill="#472b29"
                                        d="M43.188,33.067c0,0-0.953,4.147-3.812,6.221c-2.859,2.074-0.953,6.221,2.859,4.147 C46.047,41.361,47,37.214,47,34.104S44.141,29.956,43.188,33.067z"
                                    ></path>
                                    <path
                                        fill="#472b29"
                                        d="M56.812,33.067c0,0,0.953,4.147,3.812,6.221c2.859,2.074,0.953,6.221-2.859,4.147 C53.953,41.361,53,37.214,53,34.104S55.859,29.956,56.812,33.067z"
                                    ></path>
                                    <path
                                        fill="#472b29"
                                        d="M42,46.625c-0.092,0-0.181-0.052-0.225-0.14c-0.061-0.124-0.009-0.274,0.115-0.334 c4.674-2.288,6.98-6.415,6.854-12.267c-0.05-2.345-1.03-4.053-2.622-4.57c-1.37-0.444-2.873,0.08-3.827,1.337 c-0.083,0.11-0.241,0.131-0.35,0.048c-0.11-0.083-0.132-0.24-0.048-0.35c1.068-1.407,2.829-2.013,4.379-1.51 c1.803,0.585,2.913,2.467,2.968,5.035c0.128,5.978-2.339,10.379-7.135,12.727C42.075,46.617,42.037,46.625,42,46.625z"
                                    ></path>
                                    <path
                                        fill="#472b29"
                                        d="M39.45,47.272c-1.828,0-3.396-1.031-4.109-2.757c-0.738-1.789-0.583-4.636,2.281-6.773 c0.11-0.083,0.268-0.06,0.35,0.051c0.083,0.111,0.06,0.267-0.051,0.35c-2.634,1.965-2.787,4.558-2.117,6.181 c0.713,1.728,2.396,2.672,4.287,2.402c0.133-0.02,0.263,0.076,0.283,0.212c0.02,0.136-0.076,0.263-0.212,0.283 C39.92,47.255,39.683,47.272,39.45,47.272z"
                                    ></path>
                                    <path
                                        fill="#472b29"
                                        d="M38.937,37c-0.053,0-0.107-0.017-0.152-0.052c-0.109-0.084-0.13-0.241-0.046-0.35 c1.47-1.917,2.39-4.77,2.398-4.799c0.042-0.131,0.184-0.205,0.314-0.162c0.132,0.042,0.205,0.183,0.163,0.314 c-0.039,0.12-0.955,2.966-2.479,4.951C39.085,36.966,39.011,37,38.937,37z"
                                    ></path>
                                    <path
                                        fill="#472b29"
                                        d="M51.374,37.77c-0.118,0-0.223-0.084-0.245-0.204c-0.215-1.151-0.311-2.393-0.283-3.693 c0.016-0.753,0.12-1.449,0.308-2.07c0.04-0.132,0.18-0.206,0.312-0.167c0.132,0.04,0.207,0.18,0.167,0.312 c-0.175,0.577-0.271,1.229-0.286,1.936c-0.027,1.265,0.065,2.473,0.274,3.59c0.025,0.136-0.064,0.266-0.2,0.292 C51.405,37.768,51.39,37.77,51.374,37.77z"
                                    ></path>
                                    <path
                                        fill="#472b29"
                                        d="M58.091,46.625c-0.037,0-0.075-0.008-0.11-0.025c-3.247-1.589-5.417-4.079-6.45-7.4 c-0.041-0.132,0.033-0.272,0.165-0.313c0.136-0.041,0.272,0.033,0.313,0.165c0.99,3.185,3.073,5.573,6.192,7.1 c0.124,0.061,0.175,0.21,0.115,0.334C58.272,46.573,58.184,46.625,58.091,46.625z"
                                    ></path>
                                    <path
                                        fill="#472b29"
                                        d="M60.643,47.271c-0.307,0-0.62-0.029-0.938-0.087c-0.136-0.025-0.226-0.156-0.2-0.291 c0.024-0.136,0.157-0.227,0.291-0.2c1.945,0.359,3.694-0.538,4.458-2.286c0.772-1.768,0.428-4.39-2.082-6.263 c-2.231-1.664-3.634-6.008-3.693-6.192c-0.502-1.476-1.614-2.502-2.971-2.74c-1.188-0.208-2.313,0.228-3.088,1.196 c-0.087,0.108-0.245,0.125-0.352,0.039c-0.108-0.086-0.125-0.244-0.039-0.351c0.88-1.098,2.211-1.613,3.565-1.375 c1.54,0.27,2.796,1.42,3.36,3.076c0.015,0.048,1.415,4.379,3.517,5.947c2.73,2.037,3.093,4.915,2.242,6.864 C63.977,46.287,62.436,47.271,60.643,47.271z"
                                    ></path>
                                    <path
                                        fill="#836f61"
                                        d="M49.5,44.688c0,0.449-0.403,0.813-0.9,0.813c-0.497,0-0.45,0-1.35,0 c-1.013,0-0.45-1.625,1.35-1.625C49.097,43.875,49.5,44.239,49.5,44.688z"
                                    ></path>
                                    <path
                                        fill="#472b29"
                                        d="M48.6,45.625h-1.35c-0.191,0-0.351-0.053-0.461-0.153c-0.107-0.098-0.164-0.234-0.164-0.394 c0-0.543,0.703-1.329,1.975-1.329c0.565,0,1.025,0.421,1.025,0.938S49.165,45.625,48.6,45.625z M48.6,44 c-1.149,0-1.725,0.692-1.725,1.079c0,0.089,0.028,0.159,0.083,0.208c0.063,0.057,0.165,0.088,0.292,0.088h1.35 c0.427,0,0.775-0.308,0.775-0.688S49.027,44,48.6,44z"
                                    ></path>
                                    <path
                                        fill="#836f61"
                                        d="M50.25,44.688c0,0.449,0.403,0.813,0.9,0.813c0.497,0,0.45,0,1.35,0c1.013,0,0.45-1.625-1.35-1.625 C50.653,43.875,50.25,44.239,50.25,44.688z"
                                    ></path>
                                    <path
                                        fill="#472b29"
                                        d="M52.5,45.625h-1.35c-0.565,0-1.025-0.421-1.025-0.938s0.46-0.938,1.025-0.938 c1.272,0,1.975,0.786,1.975,1.329c0,0.16-0.057,0.296-0.164,0.394C52.851,45.572,52.691,45.625,52.5,45.625z M51.15,44 c-0.427,0-0.775,0.308-0.775,0.688s0.348,0.688,0.775,0.688h1.35c0.128,0,0.229-0.031,0.292-0.088 c0.055-0.05,0.083-0.12,0.083-0.208C52.875,44.692,52.299,44,51.15,44z"
                                    ></path>
                                    <path
                                        fill="#edf7f5"
                                        d="M43.528,49.875c-0.313,1.651-0.398,3.952,0.222,7"
                                    ></path>
                                    <path
                                        fill="#472b29"
                                        d="M43.75,57.125c-0.116,0-0.22-0.082-0.245-0.2c-0.539-2.648-0.613-5.035-0.223-7.096 c0.026-0.136,0.156-0.225,0.292-0.199c0.136,0.026,0.225,0.156,0.199,0.292c-0.378,1.997-0.304,4.32,0.222,6.904 c0.027,0.135-0.06,0.267-0.195,0.295C43.783,57.123,43.766,57.125,43.75,57.125z"
                                    ></path>
                                    <g>
                                        <path
                                            fill="#edf7f5"
                                            d="M44.875,46.5c0,0-0.479,0.548-0.911,1.75"
                                        ></path>
                                        <path
                                            fill="#472b29"
                                            d="M43.964,48.5c-0.028,0-0.057-0.005-0.084-0.015c-0.13-0.047-0.197-0.19-0.151-0.32 c0.443-1.233,0.938-1.806,0.958-1.83c0.091-0.104,0.248-0.113,0.352-0.024c0.104,0.091,0.115,0.248,0.025,0.353 c-0.004,0.005-0.457,0.536-0.864,1.67C44.163,48.437,44.066,48.5,43.964,48.5z"
                                        ></path>
                                    </g>
                                    <g>
                                        <path
                                            fill="#edf7f5"
                                            d="M56.472,49.875c0.313,1.651,0.398,3.952-0.222,7"
                                        ></path>
                                        <path
                                            fill="#472b29"
                                            d="M56.25,57.125c-0.017,0-0.034-0.002-0.05-0.005c-0.135-0.027-0.223-0.159-0.195-0.295 c0.526-2.584,0.6-4.907,0.222-6.904c-0.026-0.136,0.063-0.267,0.199-0.292c0.131-0.026,0.266,0.063,0.292,0.199 c0.391,2.061,0.316,4.448-0.223,7.096C56.471,57.043,56.367,57.125,56.25,57.125z"
                                        ></path>
                                    </g>
                                    <g>
                                        <path
                                            fill="#edf7f5"
                                            d="M55.125,46.5c0,0,0.479,0.548,0.911,1.75"
                                        ></path>
                                        <path
                                            fill="#472b29"
                                            d="M56.036,48.5c-0.103,0-0.199-0.063-0.235-0.166c-0.408-1.134-0.86-1.665-0.864-1.67 c-0.09-0.104-0.079-0.262,0.025-0.353c0.103-0.089,0.261-0.08,0.352,0.024c0.021,0.024,0.516,0.597,0.958,1.83 c0.046,0.13-0.021,0.273-0.151,0.32C56.093,48.495,56.064,48.5,56.036,48.5z"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                            <p className="leading-relaxed text-white font-bold">
                                Thriller
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default FeaturedCategories;
