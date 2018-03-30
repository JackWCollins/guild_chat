FactoryBot.define do
  factory :user, aliases: [:steven] do
    first_name "Steven"
    last_name "Alpha"

    trait :kevin do
      first_name "Kevin"
      last_name "Beta"
    end
  end
end