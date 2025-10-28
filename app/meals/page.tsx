import PageLayout from "@/components/page-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Flame, Leaf } from "lucide-react"

const mealPlans = [
  {
    id: 1,
    name: "Muscle Building",
    description: "High protein, calorie surplus for muscle growth",
    calories: "3000-3500",
    protein: "200g",
    meals: 5,
    duration: "12 weeks",
    recipes: 45,
    icon: Flame,
  },
  {
    id: 2,
    name: "Fat Loss",
    description: "Calorie deficit with balanced macros",
    calories: "1800-2200",
    protein: "150g",
    meals: 4,
    duration: "8 weeks",
    recipes: 32,
    icon: Leaf,
  },
  {
    id: 3,
    name: "Maintenance",
    description: "Balanced nutrition for overall health",
    calories: "2200-2600",
    protein: "120g",
    meals: 4,
    duration: "Ongoing",
    recipes: 50,
    icon: Users,
  },
]

const recipes = [
  {
    id: 1,
    name: "Grilled Chicken Breast with Quinoa",
    calories: 450,
    protein: 45,
    carbs: 35,
    fat: 12,
    time: "25 min",
    difficulty: "Easy",
  },
  {
    id: 2,
    name: "Salmon with Sweet Potato",
    calories: 520,
    protein: 38,
    carbs: 42,
    fat: 18,
    time: "30 min",
    difficulty: "Medium",
  },
  {
    id: 3,
    name: "Turkey Meatballs with Brown Rice",
    calories: 480,
    protein: 42,
    carbs: 38,
    fat: 14,
    time: "35 min",
    difficulty: "Medium",
  },
  {
    id: 4,
    name: "Egg White Omelet with Vegetables",
    calories: 280,
    protein: 28,
    carbs: 15,
    fat: 8,
    time: "15 min",
    difficulty: "Easy",
  },
  {
    id: 5,
    name: "Lean Beef Stir-fry with Broccoli",
    calories: 420,
    protein: 40,
    carbs: 28,
    fat: 16,
    time: "20 min",
    difficulty: "Easy",
  },
  {
    id: 6,
    name: "Tuna Salad with Olive Oil Dressing",
    calories: 350,
    protein: 35,
    carbs: 12,
    fat: 18,
    time: "10 min",
    difficulty: "Easy",
  },
]

export default function MealsPage() {
  return (
    <PageLayout title="Meal Plans & Recipes" description="Personalized nutrition plans with delicious, healthy recipes">
      {/* Meal Plans */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Choose Your Plan</h2>
            <p className="text-muted-foreground text-lg">Tailored nutrition for your goals</p>
          </div>

          {/* <div className="grid md:grid-cols-3 gap-6">
            {mealPlans.map((plan) => {
              const Icon = plan.icon
              return (
                <Card key={plan.id} className="p-6 hover:shadow-lg transition">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>

                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Calories:</span>
                      <span className="font-semibold text-foreground">{plan.calories}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Protein:</span>
                      <span className="font-semibold text-foreground">{plan.protein}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Meals/Day:</span>
                      <span className="font-semibold text-foreground">{plan.meals}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Recipes:</span>
                      <span className="font-semibold text-foreground">{plan.recipes}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90">Select Plan</Button>
                </Card>
              )
            })}
          </div> */}
                    <div className="text-green-800 text-center font-extrabold text-5xl md:text-6xl lg:text-7xl text-foreground tracking-tight drop-shadow-lg">
            Stay Tuned
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Recipes</h2>
            <p className="text-muted-foreground text-lg">Delicious and nutritious meals</p>
          </div> */}

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <Card key={recipe.id} className="p-6 hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-foreground mb-4">{recipe.name}</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Calories</span>
                    <span className="font-semibold text-foreground">{recipe.calories}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground text-xs">Protein</p>
                      <p className="font-semibold text-foreground">{recipe.protein}g</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Carbs</p>
                      <p className="font-semibold text-foreground">{recipe.carbs}g</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Fat</p>
                      <p className="font-semibold text-foreground">{recipe.fat}g</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm pt-2 border-t border-border">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {recipe.time}
                    </div>
                    <div className="text-muted-foreground">{recipe.difficulty}</div>
                  </div>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  View Recipe
                </Button>
              </Card>
            ))}
          </div> */}
        </div>
      </section>
    </PageLayout>
  )
}
