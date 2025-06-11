# Workout API

The workout API is a RESTful web service that allows users to retrieve information about exercises, generate random workouts, and filter exercises by various parameters. It uses data from an exercise list, which is stored in a JSON file, to generate the workouts. The API is built using Node.js and the Express framework, which makes it easy to run locally and on a remote server. It is a simple way to quickly generate a workout without having to manually go through a list of exercises, which can save users time and help them stay on track with their fitness goals.

## Endpoints

The API has the following endpoints:

- GET /exercises: Returns the entire list of exercises in the database in JSON format.
- GET /workout/:muscleGroup: Returns a random exercise for the provided muscle group in JSON format.
- GET /workout-target/:target: Returns a random exercise that targets the provided body part, such as "Upper", "Lower" or "Core". The level of difficulty can be filtered by adding a query parameter "level" with the desired level, such as "Beginner", "Intermediate" or "Advanced".
- GET /random-workout: Returns a random workout for the provided muscle group and level of difficulty in JSON format. The muscle group is required and level is optional.
- GET /exercises/level/:level: Returns a list of exercises that match the provided level of difficulty in JSON format.

## Query Parameters

- muscleGroup: The muscle group of the exercises. This parameter is required. e.g "Abdominals - Lower"
- level: The level of difficulty of the exercises. This parameter is optional. e.g "Advanced"
- target: The body part targeted by the exercise. This parameter is required. e.g "Upper"
- num: The number of exercises required. This parameter is optional.

## Example Usage

Retrieving a random exercise for the muscle group "Chest":

 ```your-url-api/workout/Chest ```

Retrieving a random exercise for the muscle group "Chest" and difficulty level "Beginner":

 ```your-url-api/workout-target/Upper?level=Beginner ```
 
Retrieving 3 random exercises for the muscle group "Chest" and difficulty level "Beginner":

 ```your-url-api/random-workout?muscleGroup=Chest&level=Beginner&num=3 ```
 
 
## Output Structure

The API returns a JSON object containing the following fields:

 ```
 {
    "Muscle Group": "Chest - Pectoralis",
    "Exercise": "Pec Deck Fly",
    "Level": "Beginner",
    "U/L/C": "Upper",
    "P / P": "Push",
    "Modality": "M",
    "Joint":"s"
}
