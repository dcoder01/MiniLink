# MiniLink 

A URL shortening application built with Express, MongoDB, EJS, and Bootstrap.

## Features
- User account creation and login
- URL shortening with `shortid`
- Copy shortened URLs for easy sharing
- Users can view their generated URLs and the number of clicks each link received
- Admin login to view all links and their click statistics


## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/dcoder01/MiniLink.git
    ```
2. Navigate to the project directory:
    ```sh
    cd MiniLink
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Create a `.env` file in the root directory and add the following variables:
    ```
    MONGO_URL=mongodb://localhost:27017/minilink
    PORT=8000
    ```
5. Start the application:
    ```sh
    npm start
    ```

## Usage
1. Open your browser and go to `http://localhost:8000`.
2. Create an account or log in.
3. Shorten URLs and manage them from your dashboard.
4. Admins can log in to view all user links and click statistics.


## License
This project is licensed under the MIT License.
